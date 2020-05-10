$(
    function(){

        let newTask = $("#newTask");
        let addBtn = $("#addBtn");
        let todoList = $("#todoList");

        addBtn.click(function(){
            let currentTask = newTask.val();

            $.post(       //AJAX Request
                "/todos",
                {task:currentTask},
                function(data){
                    todoList.empty();
                    let s="";
                    data.forEach(value => {
                        s+="<li>"+value +"</li>";
                    });
                    console.log(s);
                    todoList.append(s);
                }
            )
        })

        
    }
)

console.log("some stuff");