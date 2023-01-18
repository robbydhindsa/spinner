let loadingChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

for (const char in loadingChars) {
  setTimeout(() => {
    process.stdout.write(loadingChars[char]);
  }, 200 * char);
}
