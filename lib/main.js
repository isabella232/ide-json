const { AutoLanguageClient } = require('atom-languageclient')

class JSONLanguageClient extends AutoLanguageClient {
  getGrammarScopes() { return ['source.json'] }
  getLanguageName() { return 'JSON' }
  getServerName() { return 'VSCode' }

  startServerProcess() {
    return super.spawnChildNode([require.resolve('vscode-json-languageserver/bin/vscode-json-languageserver'), '--stdio']);
  }
}

module.exports = new JSONLanguageClient();
