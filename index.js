

      function onClickToCopy(text) {

                navigator.clipboard.writeText(text)
                .then(
                  () => {alert("you've copied "+text);}
                );

                // var textarea = document.createElement("textarea");
                // textarea.textContent = text;
                // textarea.style.position = "fixed";
                // document.body.appendChild(textarea);
                // textarea.select();
                // try {
                //     return navigator.clipboard("cut");
                // } catch (ex) {
                //     console.warn("Copy to clipboard failed.", ex);
                //     return false;
                // } finally {
                //     document.body.removeChild(textarea);
                // }
                // navigator.permissions.query({name: "clipboard-write"}).then(result => {
                //   if (result.state == "granted" || result.state == "prompt") {
                //     navigator.clipboard.writeText(text).then(
                //       alert("You've copied "+text+" to your clipboard.")
                //     )
                //   }
                // });

    };


    function setStyle()
    {

        let el = document.getElementById('tooltiptext');
        let elStyle = el.style.visibility;
        console.log(elStyle);
        if (elStyle !== "visible") {
          el.style.visibility = "visible";
        }
        else
        {
          el.style.visibility = "hidden";
        }

    }
