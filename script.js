
        // Function to add data to localStorage
        function addData() {
            const dataInput = document.getElementById('dataInput');
            const data = dataInput.value;
            
            if (data) {
                // Retrieve existing data from localStorage
                const existingData = localStorage.getItem('dashboardData') ? JSON.parse(localStorage.getItem('dashboardData')) : [];
                
                // Add the new data
                existingData.push(data);
                
                // Store the updated data in localStorage
                localStorage.setItem('dashboardData', JSON.stringify(existingData));
                
                // Clear the input field
                dataInput.value = '';
                
                // Update the displayed data
                displayData();
            }
        }

        // Function to delete data item
        function deleteData(index) {
            const existingData = localStorage.getItem('dashboardData') ? JSON.parse(localStorage.getItem('dashboardData')) : [];
            
            // Remove the item at the specified index
            existingData.splice(index, 1);
            
            // Update the stored data in localStorage
            localStorage.setItem('dashboardData', JSON.stringify(existingData));
            
            // Update the displayed data
            displayData();
        }

        // Function to display stored data
        function displayData() {
            const dataList = document.getElementById('dataList');
            
            // Retrieve data from localStorage
            const storedData = localStorage.getItem('dashboardData');
            
            if (storedData) {
                const dataArr = JSON.parse(storedData);
                dataList.innerHTML = '';
                
                // Populate the list with stored data
                dataArr.forEach((item, index) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${index + 1}. ${item}`;
                    
                    // Create a delete button for each item
                    const deleteButton = document.createElement('span');
                    deleteButton.textContent = 'Delete';
                    deleteButton.className = 'delete-button';
                    deleteButton.onclick = () => deleteData(index);
                    
                    listItem.appendChild(deleteButton);
                    dataList.appendChild(listItem);
                });
            }
        }

        // Initial display of stored data
        displayData();
    
