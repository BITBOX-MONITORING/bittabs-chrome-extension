document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('test-tabs').addEventListener('click', function () {
    const userCode = in_usercode.value;
    const inactivityTime = in_inactvity_time.value * 60000;

    console.log(inactivityTime);

    const blockSites = [
      'www.youtube.com',
      'br.pinterest.com',
      'www.primevideo.com',
      'www.twitch.tv',
      'zty.pe'
    ];

    let lastActiveTime = Date.now();

    // Função para remover sites contidos na lista blockSites
    function removeBlockedSites(tabs) {
      for (let tab of tabs) {
        const url = new URL(tab.url);
        const hostname = url.hostname;

        console.log(url);
        console.log(hostname);

        for (let blockSite of blockSites) {
          if (hostname.includes(blockSite)) {
            chrome.tabs.remove(tab.id);
          }
        }
      }
    }

    // Função para enviar os dados para o servidor
    function sendTabsData(tabs) {
      const data = {
        tabs: tabs.map((tab) => {
          return {
            id_janela: tab.windowId,
            titulo: tab.title,
            url: tab.url,
            ultima_vez_aberto: lastActiveTime,
            codigo_patrimonio: userCode,
          };
        }),
      };

      console.log('Lista de dados: ', data);

      fetch('http://localhost:3000/abaNavegadorRoutes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    chrome.tabs.query({}, function (tabs) {
      sendTabsData(tabs);

      setTimeout(() => {
        removeBlockedSites(tabs);
      }, inactivityTime);

      setInterval(() => {
        sendTabsData(tabs);
      }, 10000);
    });
  });
});
