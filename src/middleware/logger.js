export async function Log(
  stack,
  level,
  pkg,
  message
) {
  console.log(
    `[${stack}] [${level}] [${pkg}] ${message}`
  );
}