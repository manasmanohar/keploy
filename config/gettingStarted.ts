export const gettingStartedConfig = {
  title: 'Start Testing in Minutes',
  subtitle: 'Instant API tests from live traffic, no code changes required.',
  steps: [
    {
      id: 1,
      title: 'Quick Setup',
      description: 'Single command to run, zero code changes required.',

      code: 'curl --silent -O -L https://keploy.io/install.sh && source install.sh',
      codeLanguage: 'bash',
    },
    {
      id: 2,
      title: 'Capture and Create',
      description:
        'Launch your app with Keploy to automatically generate test cases from live API traffic.',

      code: 'keploy record -c CMD_TO_RUN_APP.',
      codeLanguage: 'bash',
      note: "Note: CMD_TO_RUN_APP is your app's start command (e.g., python main.py, npm start, java -jar xyz.jar, go run main.go)",
    },
    {
      id: 3,
      title: 'Test with Confidence',
      description:
        'Execute tests with zero dependencies - all mocks are handled for you.',
      code: 'keploy test -c CMD_TO_RUN_APP --delay 10',
      codeLanguage: 'bash',
    },
  ],
}
