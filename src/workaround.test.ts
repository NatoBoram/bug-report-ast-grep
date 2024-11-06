import { test } from "vitest"
import { lang } from "./workaround.ts"

test("workaround", ({ expect }) => {
	expect(lang).toBe("TypeScript")
})
