load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library")

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
    name = "c_lib",
    srcs = ["index.ts"],
    composite = True,
    declaration = True,
    source_map = True,
    tsconfig = ":tsconfig_lib",
    deps = [],
)

js_library(
    name = "c",
    srcs = ["c.txt"],
    package_name = "@monorepo/packages/c",
    deps = [
        "c_lib",
    ],
)