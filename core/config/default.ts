import { SerializedContinueConfig } from "..";

export const defaultConfig: SerializedContinueConfig = {
  "allowAnonymousTelemetry": false,
  models: [
    {
      "title": "xsj-DeepSeek-7b",
      "model": "deepseek-7b",
      "apiBase": "http://xsjop-ollama.seasungame.com",
      "completionOptions": {
        "numThreads": 3
      },
      "provider": "ollama"
    }
  ],
  slashCommands: [
    {
      name: "edit",
      description: "Edit selected code",
    },
    {
      name: "comment",
      description: "Write comments for the selected code",
    },
    {
      name: "share",
      description: "Export this session as markdown",
    },
    {
      name: "cmd",
      description: "Generate a shell command",
    },
  ],
  customCommands: [
    {
      name: "test",
      prompt:
        "Write a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      description: "Write unit tests for highlighted code",
    },
  ],
  contextProviders: [
    { name: "diff", params: {} },
    {
      name: "open",
      params: {},
    },
    { name: "terminal", params: {} },
    { name: "problems", params: {} },
    { name: "codebase", params: {} },
  ],
  tabAutocompleteModel: {
    title: "Starcoder 3b",
    provider: "ollama",
    model: "starcoder-3b",
  },
};

export const defaultConfigJetBrains: SerializedContinueConfig = {
  "allowAnonymousTelemetry": false,
  models: [
    {
      "title": "xsj-DeepSeek-7b",
      "model": "deepseek-7b",
      "apiBase": "http://xsjop-ollama.seasungame.com",
      "completionOptions": {
        "numThreads": 3
      },
      "provider": "ollama"
    },  
  ],
  slashCommands: [
    {
      name: "edit",
      description: "Edit selected code",
    },
    {
      name: "comment",
      description: "Write comments for the selected code",
    },
    {
      name: "share",
      description: "Export this session as markdown",
    },
  ],
  customCommands: [
    {
      name: "test",
      prompt:
        "Write a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      description: "Write unit tests for highlighted code",
    },
  ],
  contextProviders: [
    {
      name: "open",
      params: {},
    },
  ],
};
