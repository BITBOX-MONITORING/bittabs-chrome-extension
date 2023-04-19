document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("test-tabs").addEventListener("click", function () {
    chrome.tabs.query({}, function (tabs) {

      console.log(tabs);

      setInterval(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
          // Verifica se a aba está ativa
          if (activeTab) {
            // Armazena o tempo atual como o último tempo ativo
            lastActiveTime = Date.now();

            console.log(`${activeTab.title} estou aberta!!`);
            console.log(lastActiveTime);
            console.log("--------------------------------");

          } else {
            // A aba está inativa, verifica o tempo de inatividade
            const inactiveTime = Date.now() - lastActiveTime;

            if (inactiveTime > 1000) {
              // Fecha a aba
              chrome.tabs.remove(activeTab.id);
            }
          }
        });
      }, 5000);

      const data = {
        tabs: tabs.map(tab => {
          return {
            title: tab.title,
            url: tab.url,
            lastActiveTime: Date.now()
          }
        })
      };

      console.log('Lista de dados: ', data);

      fetch('http://localhost:3000/tabs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
    });
  })
})



 // let listWindows = []
      // let openedWindows = []

      // for (var i = 0; i < currentTab.length; i++) {

      //   if (currentTab[i].title == "Nova guia") {
      //     chrome.tabs.remove(currentTab[i].id)
      //   }

      //   listWindows.push(currentTab[i].windowId)
      // }

      // for (var i = 0; i < listWindows.length; i++) {

      //   if (!openedWindows.includes(listWindows[i])) {
      //     openedWindows.push(listWindows[i])
      //   }
      // }

      // console.log(listWindows);
      // console.log("Quantidade janelas: ", openedWindows);


