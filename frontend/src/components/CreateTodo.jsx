import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
                id="title"
                type="text"
                placeholder="title"
                style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <input
                id="desc"
                type="text"
                placeholder="description"
                style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button
                style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(async function (res) {
                            const json = await res.json();
                            alert("Todo added");
                    })
                }}
            >
                Add a Todo
            </button>
        </div>
    );
}
