let InputTask = document.querySelector("#input");
let OutputDiv = document.querySelector(".output");
let OutputActive = document.querySelector(".output-Completed");
let OutputCompleted = document.querySelector(".output-Completed");
let itemsOutput = document.querySelector("#items");
let items = 10;
itemsOutput.textContent = `Items Left: ${items}`;
InputTask.addEventListener('keydown', AddTasks);

function AddTasks(e){
    switch(e.key){
        case "Enter":
            if (InputTask.value == "" || InputTask.value == null){
                alert("Fill The Input Field To Add Your Tasks");
            }else if (items == 0){
                alert(`You Can't Add More Tasks Than 10`);
                items = 0;
                itemsOutput.textContent = `Items Left: ${items}`;
            }else if (items >= 0){
                AddFnct();
                items--;
                itemsOutput.textContent = `Items Left: ${items}`;
            }else {
                items++;
                itemsOutput.textContent = `Items Left: ${items}`;
            }
        break;
};
};
let AddFnct = function AddFunction(){
    let li = document.createElement('div');
    let Circle = document.createElement('span');
    let Text = document.createElement('h1');
    let Delete = document.createElement("h3");
    Text.innerHTML = InputTask.value;
    OutputDiv.appendChild(li);
    li.appendChild(Circle)
    li.appendChild(Text);
    li.appendChild(Delete);

    Delete.style.visibility = 'hidden';
    li.addEventListener('mouseover', () => {
        Delete.style.visibility = 'visible';
    });
    li.addEventListener('mouseout', () => {
        Delete.style.visibility = 'hidden';
    });
    
    Delete.addEventListener('click',() =>{ 
        OutputDiv.removeChild(li);
        items++;
        itemsOutput.textContent = `Items Left: ${items}`;
    });


    let CircleStatus = false;
    Circle.addEventListener('click',() => {
        if (CircleStatus == false){
            CircleStatus = true;
            let AddLi = Circle.classList.add('new');
            li.style.textDecoration = 'line-through';
            Text.style.color = 'gray';
            Circle.appendChild(AddLi);
            
        }else{
            CircleStatus = false;
            li.style.textDecoration = 'none';
            Text.style.color = 'white';
            Circle.classList.remove('new');
        }
    });
};

    