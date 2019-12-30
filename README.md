## Folder/file structure:

Basically, the code looks into the doors folder, then topics, and then finally subsections with links inside each subsection.

```txt
doors
    Topic 1
        Subsection 1.txt
        Subsection 2.txt
        Subsection 3.txt
    Topic 2
        Subsection A.txt
        Subsection B.txt
        Subsection C.txt
    Topic 3
        Subsection a.txt
        Subsection b.txt
        Subsection c.txt
```

## Instructions:

### Topics

Each **_topic_** groups together various subsections. To add a new topic, add a new folder inside of the `doors` folder. For example, `Topic 4` inside of the `doors` folder.

### Subsections

Each **_subsection_** holds a list of links (and optionally some plain text descriptions mixed in too). To add a new subsection, add a new `.txt` file inside of the relevant topic. For example, you could go inside the `doors` folder, then into the `Topic 1` folder, and add a file named `Subsection 4.txt`.

### Links

To add **_links_** (like websites or videos) to a subsection, edit the relevant `.txt` file. Note: make sure to add links on new lines in the file. For example, you could copy a link, and open the file named `Subsection 1.txt`, and add a new line, and the finally paste the link. When you save, the code will auto-magically update the website.

### Descriptions or lines of plain text

Instead of links, you can also add **_descriptions_** or plain old **_text_** to a subsection. You do that by adding a new line to the relevant `.txt` file, just like you would for a link, except you have to make sure to start that new line with the words `"description equals"` or `"Description equal"` or `"Description ="`. Don't worry about the exact capitalization of those 2 words, because the code should be smart enough to handle a little variation and figure it out in most cases. Always start a new line with those 2 words, otherwise the code will try to turn it into a link.
