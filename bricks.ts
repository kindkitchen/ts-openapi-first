import { Brickyard } from "@nik-kita/brickyard"
import { interceptor } from "./.brickyard.interceptor.ts"

export const bricks =
  Brickyard.init(interceptor)
    .enroll({})
