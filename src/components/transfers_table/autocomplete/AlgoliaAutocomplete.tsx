import React, { ReactPortal } from "react";
import { createElement, Fragment, useEffect, useRef, useState } from "react";

import { usePagination, useSearchBox } from "react-instantsearch-hooks";
import {
  autocomplete,
  AutocompleteApi,
  AutocompleteOptions,
} from "@algolia/autocomplete-js";
import { BaseItem } from "@algolia/autocomplete-core";

import "@algolia/autocomplete-theme-classic";
import { createPortal } from "react-dom";
import "../../../css/AlgoliaAutocomplete.css";
import { hasPendingQueryOverrideAtom } from "../transferAtoms";
import { useRecoilState } from "recoil";

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>>;

export type SetInstantSearchUiStateOptions = {
  query: string;
};

// From https://www.algolia.com/doc/ui-libraries/autocomplete/integrations/with-react-instantsearch-hooks/#using-autocomplete-as-a-search-box
// but this doesn't seem to updated for react 18 hence some tricky portal usage
export default function AlgoliaAutocomplete({
  ...autocompleteProps
}: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null);
  const [
    autocompleteSuggestionsComponent,
    setAutocompleteSuggestionsComponent,
  ] = useState<ReactPortal | null>(null);
  const [autocompleteInstanceRef, setAutocompleteInstanceRef] =
    useState<AutocompleteApi<BaseItem> | null>(null);

  const { query, refine: setQuery } = useSearchBox();
  const { refine: setPage } = usePagination();

  const [instantSearchUiState, setInstantSearchUiState] =
    useState<SetInstantSearchUiStateOptions>({ query });

  useEffect(() => {
    setQuery(instantSearchUiState.query);
    setPage(0);
  }, [instantSearchUiState, setPage, setQuery]);

  const [hasPendingQueryOverride, setHasPendingQueryOverride] = useRecoilState(
    hasPendingQueryOverrideAtom
  );

  useEffect(() => {
    if (autocompleteInstanceRef != null && hasPendingQueryOverride) {
      // The autocomplete instance can fall out of sync with the actual query if e.g.
      // a autocomplete is clicked, this syncs the text input.
      setHasPendingQueryOverride(false);
      autocompleteInstanceRef.setQuery(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPendingQueryOverride, autocompleteInstanceRef]);
  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        setInstantSearchUiState({ query: "" });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          setInstantSearchUiState({
            query: state.query,
          });
        }
      },
      renderer: {
        createElement,
        Fragment,
        render: (arg1, arg2) => {
          // Uses a portal to render in the dom
          const autocompleteBox = arg2 as HTMLDivElement;
          setAutocompleteSuggestionsComponent(
            createPortal(arg1, autocompleteBox)
          );
        },
      },
    });
    setAutocompleteInstanceRef(autocompleteInstance);

    return () => autocompleteInstance.destroy();
    // autocomplete should only be set up once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={"algolia-autocomplete"} ref={autocompleteContainer} />
      {autocompleteSuggestionsComponent}
    </>
  );
}
