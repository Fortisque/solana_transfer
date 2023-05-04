// Phantom uses the first 4 characters followed by .. and then the last 4 characters, but we have
// a little more space so let's use 6 characters to match SOLScan's UI
export function abbreviateLongString(value: string): string {
  return value.length > 12 ? `${value.slice(0, 6)}..${value.slice(-6)}` : value;
}
