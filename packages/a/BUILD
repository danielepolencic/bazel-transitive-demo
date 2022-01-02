load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library", "nodejs_binary")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig_lib",
    src = "tsconfig.json",
    deps = [
        "//:tsconfig",
        "@npm//@types/node",
    ],
)

ts_project(
    name = "a",
    srcs = ["index.ts"],
    composite = True,
    declaration = True,
    source_map = True,
    tsconfig = ":tsconfig_lib",
    deps = [
      "//packages/b"
    ],
)

nodejs_binary(
    name = "run",
    data = [
        ":a",
        "//packages/b"
    ],
    entry_point = ":index.ts",
)