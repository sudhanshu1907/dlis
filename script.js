// JS FOR COUNTER 

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const speed = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + speed);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});






//  function showSidebar() {
        //      const sidebar = document.querySelector('.sidebar')
        //      sidebar.style.display = 'flex'
        //      console.log('menu worked');
        //  }

        //  function hideSidebar() {
        //      const sidebar = document.querySelector('.sidebar')
        //      sidebar.style.display = 'none'
        // }

        // Form Handling
        // const form = document.getElementById('form');

        // form.addEventListener('submit', (e) => {
        //   e.preventDefault();
        // //   new FormData(form);

        //   const fd = new FormData(form);
        //   console.log (fd); 
        // });

        // const form = document.querySelector("form");

        // form.addEventListener("submit", (e) => {
        //   e.preventDefault(); // Prevent form from submitting normally
        //   new FormData(form);
        //   const fd = new FormData(form); 
        //     console.log('fd')

        // });
        function formSubmit() {
            alert("Form Is Submitted Succesfully")
            console.log('Form has submitted at backend successfully. Here are the detailes:-')
        }
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form from actually submitting
            const fd = new FormData(this);
            // Logging form data properly
            console.log("Form Data:");
            for (let [key, value] of fd.entries()) {
                console.log(`${key}: ${value}`);
            }
        });


        // Form Data Function 
        function removeHighlights() {
            let elements = document.querySelectorAll(".highlight");
            elements.forEach(el => {
                el.replaceWith(document.createTextNode(el.textContent));
            });
        }
        function removeHighlights() {
            let highlighted = document.querySelectorAll(".highlight");
            highlighted.forEach(span => {
                span.outerHTML = span.innerHTML; // Remove highlight but keep text
            });
        }
        function highlightText(node, word) {
            let regex = new RegExp(`(${word})`, "gi");
            node.innerHTML = node.textContent.replace(regex, `<span class="highlight">$1</span>`);
        }
        function searchPage() {
            removeHighlights(); // Remove previous highlights

            let input = document.getElementById("searchInput").value.trim();
            if (input === "") return; // Stop if input is empty

            let contentArea = document.getElementById("content");
            let nodes = contentArea.querySelectorAll("p, h1, h2, h3, h4, h5, h6 div, li, ul, span, input, lable, strong, ul, li");

            let firstMatch = null;
            nodes.forEach(node => {
                if (node.textContent.toLowerCase().includes(input.toLowerCase())) {
                    highlightText(node, input);
                    if (!firstMatch) firstMatch = node; // Save first match for scrolling
                }
            });
            if (firstMatch) {
                firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                alert("No matches found!");
            }
        }
