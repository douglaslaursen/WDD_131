// This is a Javascript object
const aCourse = {
    code: 'WDD131',
    name: 'Dynamic Web Fundamentals',
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function (sectionNumber) {
        console.log("are we here?")
        // fint the correct section in the array based on sectionNumber passed in 
        this.sections.forEach(section => {
            if (section.sectionNum == sectionNumber) {
                section.enrolled++;
            }
        });
        // increment enrollment of that section by 1


        // we update enrollment, the rendering/update of the screen is showing
        renderSections(this.sections);
    }
}

// Console log the second sections instructor
console.log(aCourse.sections[1].instructor);

// Class code
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

