
        // const heading=React.createElement("h1",{id:'info'},"hi....Pratik"); 
        // above we have created object it is not tag yet!!
        // const root=ReactDOM.createRoot(document.getElementById('root'));
        // root.render(heading);

        const temp=React.createElement("div",{id:'para'},

         React.createElement('div',{id:'child'},

        React.createElement('h1',{},"hiiiiiiiiiiiiiii")
        )
    );
    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(temp);
