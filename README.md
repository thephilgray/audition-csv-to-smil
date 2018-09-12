# audition-csv-to-smil

in progress....

A simple project to practice creating user-friendly CLI apps while addressing a very specific use-case.

## Background

The article ["How To Create EPUB 3 Read Aloud eBooks"](https://www.albertopettarin.it/blog/2014/08/02/how-to-create-epub-3-read-aloud-ebooks.html) outlines steps for creating and exporting time labels with Audacity and then using the export to generate a SMIL file to support the EPUB readaloud feature. Audition has a nicer UI for creating the timestamps but the export looks different. This program creates a mapping from Audition's CSV export to the expected data format and then also provides a way for the user to generate SMIL files from that data.

## Commands

- help
- version

## Inspiration

The tutorial ["Creating A Real-World Cli App With Node"](https://timber.io/blog/creating-a-real-world-cli-app-with-node/) was very helpful and up-to-date (at the time of writing) for getting started with building user-friendly CLI apps in Node. It was everything I was hoping for and more, and a concise read and example project.
