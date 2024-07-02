import { load } from "@std/dotenv"

let config = await load()

if (
  [
    "OPENAPI_JSON_ULR",
    "OPENAPI_JSON_PATH",
    "OEPNAPI_TS_PATH",
  ].every((k) =>
    !Object.keys(config)
      .includes(k)
  )
) {
  config = await load({
    envPath: "example.env",
  })
}
