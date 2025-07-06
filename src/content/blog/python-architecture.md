---
title: 'Python Architecture'
description: "This is an article about a potential template for Python data science architecture."
pubDate: 'June 13 2025'
heroImage: '/posts/python-architecture.png'
---

Recently, I've developed a Python data science project architecture and workflow that works well for me, and I'd like to share how it works.

In the `src/` folder of the directory shown below, there is a Python console app. The architecture is simple and compact, as you can see.

As for the workflow, it can be run with a shell script.

The shell script executes `python -m src.main "path/to/your/data.csv"`.

Then, the Python program does the following sequentially:<br/>
 1️⃣ Preprocesses the CSV file.<br/>
 2️⃣ Utilizes terminal UI that gets user input.<br/>
 3️⃣ Evaluates user input against the dataset.<br/>
 4️⃣ Visualizes data based on the evaluation.<br/>
 5️⃣ Displays a chart based on the visualization.<br/>

Each step in the data analysis process is contained in Python modules rather than all the code for the app being in the main Python file.

Please feel free to use this project as a template or let me know what you think.

📊 View the type of chart produced [here](https://github.com/pjnalls/jobdemand/blob/main/results/results.png).<br/>
🧑‍💻 Check out the full project structure [here](https://github.com/pjnalls/jobdemand).

P.S., Below is a closer look at the Python architecture:

<div align="center">
    <img 
        alt="a closer look at the folder structure for a data science project" 
        src="/posts/python-arch-zoomed-in.png"
        width="600px"    
    />
</div>