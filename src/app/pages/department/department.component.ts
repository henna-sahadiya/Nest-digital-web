import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
department=[
  {
    id:1,
    Title:"HEALTH CARE",
    Image:"../../../assets/health.jpg",
    description:"Healthcare is crucial for societal well-being, providing medical services for individuals. It encompasses preventive measures, acute care, and holistic approaches for physical and mental health. Accessible healthcare ensures everyone can address medical needs promptly, enhancing quality of life. Promoting equitable access remains a global challenge, requiring policy interventions and community involvement. Overall, healthcare is essential for maintaining and improving individual and public health."
  },
  {
    id:2,
    Title:"INSURANCE",
    Image:"../../../assets/insurance.jpg",
    description:"Insurance is a financial mechanism that provides protection against the risk of loss or uncertain events. Individuals or organizations pay premiums to an insurance company in exchange for coverage against potential losses, such as property damage, illness, or liability. In the event of a covered loss, the insurance company compensates the policyholder according to the terms of the policy. Insurance helps individuals and businesses manage risk by transferring it to the insurer, providing financial security and peace of mind"
  },
  {
    id:3,
    Title:"AEORONAUTICAL",
    Image:"../../../assets/aeoronotical.jpg",
    description:"Aeronautics involves the study and practice of designing, building, and operating aircraft. It encompasses various disciplines such as aerodynamics, avionics, and materials science. Aeronautical engineers develop and improve aircraft performance, safety, and efficiency. The field also extends to space exploration, with aerospace engineering focusing on spacecraft design and propulsion systems. Aeronautics plays a vital role in transportation, defense, and scientific research, shaping modern aviation and space industries"
  },
  {
    id:4,
    Title:"MOBILITY",
    Image:"../../../assets/mobility.jpg",
    description:"Mobility refers to the ability to move or be moved freely and easily. It encompasses various modes of transportation, including cars, bicycles, public transit, and walking. Urban mobility focuses on transportation within cities, addressing issues like congestion, pollution, and accessibility. Sustainable mobility initiatives promote alternatives to private car usage, such as biking, walking, and public transit, reducing environmental impact and promoting healthier lifestyles. Emerging technologies like electric vehicles "
  },
  {
    id:5,
    Title:"BANKING & FINANCE",
    Image:"../../../assets/bank.jpg",
    description:"Banking and finance are vital for economic functions, facilitating transactions and investment. Banks offer services like deposits and loans, while finance covers asset management and securities trading. This relationship affects economic stability and growth, regulated to ensure fairness and resilience. Technological advancements like digital banking bring efficiency but also cybersecurity challenges. Overall, banking and finance are essential for financial management and economic progress"
  },
  {
    id:6,
    Title:"GIS",
    Image:"../../../assets/gis.jpg",
    description:"GIS, or Geographic Information Systems, is a technology that captures, analyzes, and presents spatial or geographic data. It integrates various data types, such as maps, satellite imagery, and demographic information, to provide insights into geographic patterns and relationships. GIS is widely used in fields like urban planning, environmental management, emergency response, and business intelligence. It allows users to visualize data, identify trends, and make informed decisions based on spatial analysis"
  },
]
}
