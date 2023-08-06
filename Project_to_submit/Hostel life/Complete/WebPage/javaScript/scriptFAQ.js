// FAQ to Populate the Accordion
const arr = [

    {
        id: 2,
        question: "What amenities are provided in ABESIT Hostel?",
        answer: "ABESIT Hostel offers various amenities, including comfortable dormitory-style rooms, free Wi-Fi, study areas, a common room, laundry facilities, and 24/7 security."
    },
    {
        id: 3,
        question: "Do I need to bring my bedding and towels to ABESIT Hostel?",
        answer: "No, ABESIT Hostel provides bedding, including sheets, pillows, and blankets. However, students or guests are required to bring their towels."
    },
    {
        id: 4,
        question: "Is there a curfew in ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel has a curfew in place for the safety and security of all residents. Students are required to return to the hostel by the designated curfew time."
    },
    {
        id: 5,
        question: "Can I book a private room in ABESIT Hostel?",
        answer: "ABESIT Hostel primarily offers dormitory-style rooms for students. Private rooms may not be available in the hostel."
    },
    {
        id: 6,
        question: "Is breakfast included in the stay at ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel provides complimentary breakfast to all its residents."
    },
    {
        id: 7,
        question: "Is it necessary to book a bed in advance at ABESIT Hostel?",
        answer: "For ABESIT students, hostel accommodation is usually allotted based on academic year and availability. For guests attending events or workshops, prior booking is recommended to ensure a reserved bed."
    },
    {
        id: 8,
        question: "Is there an age limit for staying in ABESIT Hostel?",
        answer: "ABESIT Hostel is primarily for students attending ABESIT and there may be no specific age limit for students. However, guests attending events or workshops should check with the hostel administration for any age restrictions."
    },
    {
        id: 9,
        question: "Are pets allowed in ABESIT Hostel?",
        answer: "No, pets are not allowed in ABESIT Hostel to maintain a conducive and hygienic environment for all residents."
    },
    {
        id: 10,
        question: "Are there any rules and regulations for residents at ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel has rules and regulations that residents must adhere to, including maintaining discipline, cleanliness, and respecting the privacy and rights of fellow residents. These guidelines are in place to create a harmonious living environment for everyone."
    },

    {
        id: 11,
        question: "Is smoking allowed in ABESIT Hostel?",
        answer: "No, ABESIT Hostel is a smoke-free environment. Smoking is strictly prohibited inside the hostel premises."
    },
    {
        id: 12,
        question: "Are visitors allowed in ABESIT Hostel?",
        answer: "Yes, visitors are allowed in designated common areas of the hostel during specified visiting hours. However, they must register at the front desk and follow the hostel's rules."
    },
    {
        id: 13,
        question: "Are the hostel rooms air-conditioned?",
        answer: "While the hostel rooms are not typically air-conditioned, they are well-ventilated and equipped with fans to ensure a comfortable stay."
    },
    {
        id: 14,
        question: "What should I do if I have a problem during my stay at ABESIT Hostel?",
        answer: "If you encounter any issues or have concerns during your stay, please reach out to the hostel staff or the front desk. They will be happy to assist you and resolve any problems you may have."
    },
    {
        id: 15,
        question: "Is there a provision for laundry facilities in ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel provides laundry facilities for residents to use. You can inquire at the front desk regarding laundry procedures and costs."
    },
    {
        id: 16,
        question: "What happens if I lose my room key or access card?",
        answer: "In case of lost keys or access cards, please report it immediately to the hostel staff. They will provide a replacement, and a nominal fee may be charged for the new key or card."
    },
    {
        id: 17,
        question: "Is there a quiet hours policy in ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel has designated quiet hours to ensure a peaceful environment for studying and rest. During quiet hours, please keep noise to a minimum in dormitories and common areas."
    },
    {
        id: 18,
        question: "Can I cook my meals in the hostel kitchen?",
        answer: "Yes, residents have access to a communal kitchen where they can prepare their meals. Please clean up after use and follow the kitchen guidelines for the convenience of all residents."
    },
    {
        id: 19,
        question: "Are there any recreational activities organized by ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel frequently organizes social and recreational activities for residents to participate in and socialize with fellow students and guests."
    },
    {
        id: 20,
        question: "How can I check out from ABESIT Hostel?",
        answer: "To check out, return your room key or access card to the front desk, ensure you have cleared any outstanding dues, and follow the designated check-out procedure provided by the hostel staff."
    },
    {
        id: 21,
        question: "Is ABESIT Hostel segregated for boys and girls?",
        answer: "Yes, ABESIT Hostel is segregated into separate wings or floors for boys and girls to ensure privacy and comfort."
    },
    {
        id: 22,
        question: "Are boys allowed in the girls' hostel and vice versa?",
        answer: "No, boys are not allowed in the girls' hostel, and vice versa, to maintain a safe and secure living environment for all residents."
    },
    {
        id: 23,
        question: "What is the visitation policy between boys and girls hostels?",
        answer: "Visitation between boys and girls hostels is generally not allowed. Both hostels have their designated common areas for socializing during visiting hours."
    },
    {
        id: 24,
        question: "Are there any specific rules for boys and girls residing in ABESIT Hostel?",
        answer: "Both boys and girls are expected to abide by the same set of rules and regulations set forth by ABESIT Hostel administration."
    },
    {
        id: 25,
        question: "What measures are in place to ensure the safety of girls in the hostel?",
        answer: "ABESIT Hostel takes the safety of all residents seriously. There are security personnel, CCTV surveillance, and strict access control to maintain a safe environment for girls."
    },
    {
        id: 26,
        question: "Is there a dress code for boys and girls in ABESIT Hostel?",
        answer: "While there may not be a specific dress code, residents are expected to dress modestly and follow the institute's guidelines on appropriate attire."
    },
    {
        id: 27,
        question: "Are there any specific facilities for girls in ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel ensures that girls have access to all necessary facilities, and separate restroom and washroom facilities are provided for boys and girls."
    },
    {
        id: 28,
        question: "What is the procedure for boys and girls to apply for hostel accommodation?",
        answer: "Both boys and girls can apply for hostel accommodation through the institute's official process. Allocation of rooms is subject to availability and institute guidelines."
    },
    {
        id: 29,
        question: "Is there a warden or supervisor for each wing in the boys and girls hostels?",
        answer: "Yes, each wing or floor in the boys and girls hostels has a dedicated warden or supervisor to oversee the well-being and discipline of the residents."
    },
    {
        id: 30,
        question: "Are there any separate curfew timings for boys and girls in ABESIT Hostel?",
        answer: "Yes, ABESIT Hostel may have different curfew timings for boys and girls to ensure their safety and compliance with institute regulations."
    },
    {
        id: 31,
        question: "What kind of food is served in the hostel mess?",
        answer: "The hostel mess provides a variety of balanced meals (only vegetarian) to cater to the diverse preferences of the residents."
      },
      {
        id: 32,
        question: "Are there any specific timings for breakfast, lunch, and dinner in the mess?",
        answer: "Yes, the hostel mess follows specific timings for serving meals. Breakfast, lunch, and dinner are served at designated hours to ensure residents have access to fresh and timely meals."
      },
      {
        id: 33,
        question: "Can special dietary requirements or preferences be accommodated in the hostel mess?",
        answer: "Yes, the hostel mess endeavors to accommodate special dietary requirements, such as vegan or gluten-free options, upon prior request. Residents can communicate their preferences to the mess authorities."
      },
      {
        id: 34,
        question: "Is the hostel mess hygienic and clean?",
        answer: "Yes, maintaining hygiene and cleanliness in the mess is a top priority. The mess staff follows strict guidelines for food preparation and sanitation to ensure a healthy dining experience."
      },
      {
        id: 35,
        question: "Are residents allowed to suggest menu preferences in the mess?",
        answer: "Yes, the hostel administration welcomes feedback from residents, and they can suggest menu preferences or provide feedback on the quality of the food through designated channels."
      },
      {
        id: 36,
        question: "What happens if a resident misses a meal in the mess?",
        answer: "In case a resident misses a meal due to prior engagements or other reasons, they can request for packed meals, subject to availability, from the mess authorities."
      },
      {
        id: 37,
        question: "Is there a provision for clean drinking water in the hostel mess?",
        answer: "Yes, the hostel mess provides clean and safe drinking water through water dispensers or water coolers for the convenience of the residents."
      },
      {
        id: 38,
        question: "Can residents invite guests to dine in the mess?",
        answer: "Generally, only residents are allowed to dine in the mess. However, special arrangements may be made for guests during events or specific occasions with prior approval from the mess authorities."
      },
      {
        id: 39,
        question: "What steps are taken to avoid food wastage in the hostel mess?",
        answer: "The hostel mess adopts measures to minimize food wastage by careful meal planning, encouraging residents to take only what they can consume, and repurposing surplus food for later use."
      },
      {
        id: 40,
        question: "Is there any provision for midnight snacks or late-night meals?",
        answer: "While the mess operates at specific meal timings, arrangements for late-night snacks or meals may be available in the hostel common areas or nearby eateries during specific hours."
      }
];

// <!-- HTML Structure for the Accordion Container -->
{/* <div id="faq" class="accordion">
</div> */}

const faqContainer = document.getElementById("faq");

// Function to create the accordion items
function createAccordionItem(id, question, answer) {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const accordionHeader = document.createElement("h2");
    accordionHeader.classList.add("accordion-header");
    accordionHeader.id = `heading${id}`;

    const accordionButton = document.createElement("button");
    accordionButton.classList.add("accordion-button", "collapsed");
    accordionButton.type = "button";
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#collapse${id}`);
    accordionButton.setAttribute("aria-expanded", "false");
    accordionButton.setAttribute("aria-controls", `collapse${id}`);

    const boldQuestion = document.createElement("strong");
    boldQuestion.textContent = `${id}`+". "+ question;
    accordionButton.appendChild(boldQuestion);

    accordionHeader.appendChild(accordionButton);



    const accordionCollapse = document.createElement("div");
    accordionCollapse.id = `collapse${id}`;
    accordionCollapse.classList.add("accordion-collapse", "collapse");
    accordionCollapse.setAttribute("aria-labelledby", `heading${id}`);
    accordionCollapse.setAttribute("data-bs-parent", "#faq");

    const accordionBody = document.createElement("div");
    accordionBody.classList.add("accordion-body");
    accordionBody.textContent = answer;

    accordionCollapse.appendChild(accordionBody);

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);

    return accordionItem;
}

// Function to create all the accordion items and append them to the container
function createAccordions() {
    for (const { id, question, answer } of arr) {
        const accordionItem = createAccordionItem(id, question, answer);
        faqContainer.appendChild(accordionItem);
    }
}

// Call the function to create the accordions on page load
createAccordions();
