import { test } from "vitest"
import { lang } from "./not_assignable.ts"

test("not assignable", ({ expect }) => {
	expect(lang).toBe("TypeScript")
})
