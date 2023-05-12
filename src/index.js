document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("test-tabs").addEventListener("click", function () {

    const inactivityTime = in_inactvity_time.value * 60000
    let lastActiveTime

    chrome.tabs.query({}, function (tabs) {
      setInterval(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
          if (activeTab) {
            lastActiveTime = Date.now();

            console.log(`${activeTab.title} estou aberta!!`);
            console.log(lastActiveTime);
            console.log("--------------------------------");

          } else {
            const inactiveTime = Date.now() - lastActiveTime;

           for (let tab of tabs){
            if (inactiveTime > inactivityTime) {
              chrome.tabs.remove(tab.id);
            }
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

      console.log('Lista de dados: ', data)

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



