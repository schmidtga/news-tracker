const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchterm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia Search Term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['who is', 'what is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose an Option')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}

start()