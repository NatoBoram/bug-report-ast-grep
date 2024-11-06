import type { Lang } from "@ast-grep/napi"

export function isLang(lang: string): lang is Lang {
	return Object.values<string>(langs).includes(lang)
}

export const langs = {
	Bash: "Bash",
	C: "C",
	Cpp: "Cpp",
	CSharp: "CSharp",
	Css: "Css",
	Dart: "Dart",
	Elixir: "Elixir",
	Go: "Go",
	Haskell: "Haskell",
	Html: "Html",
	Java: "Java",
	JavaScript: "JavaScript",
	Json: "Json",
	Kotlin: "Kotlin",
	Lua: "Lua",
	Php: "Php",
	Python: "Python",
	Ruby: "Ruby",
	Rust: "Rust",
	Scala: "Scala",
	Sql: "Sql",
	Swift: "Swift",
	Tsx: "Tsx",
	TypeScript: "TypeScript",
	Yaml: "Yaml",
} as Record<Lang, Lang>
