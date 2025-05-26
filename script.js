    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
      const list = document.getElementById("todo-list");
      list.innerHTML = "";
      tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="removeTask(${i})">❌</button>`;
        list.appendChild(li);
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask() {
      const input = document.getElementById("todo-input");
      const task = input.value.trim();
      if (task) {
        tasks.push(task);
        input.value = "";
        renderTasks();
      }
    }

    function removeTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    renderTasks();

    // Product Listing
    let products = [
      { name: "Laptop", price: 50000 },
      { name: "Smartphone", price: 20000 },
      { name: "Keyboard", price: 800 },
      { name: "Headphones", price: 1500 },
    ];

    function renderProducts() {
      const list = document.getElementById("product-list");
      list.innerHTML = "";
      products.forEach(p => {
        const item = document.createElement("div");
        item.textContent = `${p.name} - ₹${p.price}`;
        list.appendChild(item);
      });
    }

    function sortProducts() {
      const value = document.getElementById("sort").value;
      products.sort((a, b) => value === "asc" ? a.price - b.price : b.price - a.price);
      renderProducts();
    }

    renderProducts();