

        
        document.getElementById("submitButton").addEventListener("click", saveData)

        function saveData() {
            console.log(" HERE")
            chrome.storage.sync.set({id: document.getElementById("textInput").value}, function() {
            document.getElementById('submitButton').remove()
            document.getElementById('textInput').remove()
            document.getElementById('titleText').remove()
            const header = document.getElementById("h1")
            const node = document.createTextNode("You're all set!")
            header.appendChild(node)
            
        })

        }
