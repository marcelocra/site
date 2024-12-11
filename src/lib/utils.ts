type Opts = {
  group?: boolean;
  title?: string;
  logFunction?: "log" | "trace" | "error" | "warn" | "info" | "debug";
};

function isOpts(obj: any): obj is Opts {
  return (
    typeof obj === "object" &&
    (obj.group === undefined || typeof obj.group === "boolean") &&
    (obj.title === undefined || typeof obj.title === "string") &&
    (obj.logFn === undefined ||
      ["log", "trace", "error", "warn", "info", "debug"].includes(obj.logFn))
  );
}

export function debug(...args: unknown[]) {
  if (!import.meta.env.DEV) {
    return;
  }

  const [first, ...rest] = args;

  const firstIsOpts =
    typeof first === "object" && first !== null && isOpts(first);

  if (!firstIsOpts) {
    return;
  }

  const { opts, ...restFirst } = first as {
    opts: Opts;
    [key: string]: unknown;
  };

  if (rest.length === 0 || restFirst !== undefined) {
    throw new Error(
      "Invalid `debug` call. If the first argument is an `Opts` object, you MUST: (1) give Opts only valid properties; (2) pass at least one more argument after it"
    );
  }

  let logFunction = console.log;
  if (opts.logFunction) {
    logFunction = console[opts.logFunction];
  }

  if (opts.group) {
    console.groupCollapsed(opts.title ?? rest[0]);
    logFunction(rest.slice(1));
    return;
  }

  const prefix = `[${new Date().toLocaleString("pt-br", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  })}] [${opts.logFunction ?? "log"}] [${opts.title ?? rest[0]}]`;

  logFunction(prefix, ...rest.slice(1));
}
