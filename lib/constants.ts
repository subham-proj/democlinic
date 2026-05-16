export const CLINIC_NAME = "PhysioPoint Clinic";
export const TAGLINE = "Expert physiotherapy, book in seconds";
export const LOCATION = "12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038";
export const PHONE = "+91 98765 43210";
export const PHONE_HREF = "tel:+919876543210";
export const EMAIL = "hello@physiopoint.in";
export const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20PhysioPoint%20Clinic.";

// Format: "cal-username/event-type-slug" — e.g. "subham-singh/30min"
// The event type slug must exist on your Cal.com account (check cal.com/event-types)
export const CAL_USERNAME = "subham-singh";

export const SERVICES = [
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    shortDesc:
      "Get back to peak performance with targeted rehab for sports-related injuries.",
    description:
      "Our sports injury rehabilitation programme is designed for athletes and active individuals who want to return to their sport safely and stronger than before. We combine manual therapy, functional movement assessment, and sport-specific exercises to accelerate healing and prevent re-injury. Our therapists work closely with you to understand the demands of your sport and build a progressive return-to-play plan. Whether it's a hamstring strain, ACL recovery, or a shoulder dislocation, we have the expertise to guide your recovery.",
    conditions: [
      "Hamstring & quadriceps strains",
      "ACL / MCL / PCL injuries",
      "Rotator cuff tears",
      "Ankle sprains & instability",
      "Tennis & golfer's elbow",
      "Runner's knee (PFPS)",
    ],
    icon: "sports",
  },
  {
    id: "back-spine",
    title: "Back & Spine Care",
    shortDesc:
      "Targeted treatment for chronic and acute back pain, disc issues, and postural problems.",
    description:
      "Back pain is one of the most common reasons people visit a physiotherapist, and it is also one of the most treatable. Our spinal care programme addresses the root cause of your pain — whether that is a disc bulge, muscle imbalance, poor posture, or joint stiffness — and builds a personalised treatment plan that gives you lasting relief. We use a combination of spinal mobilisation, therapeutic exercises, dry needling, and ergonomic advice to get you moving freely again. Most patients see significant improvement within 4–6 sessions.",
    conditions: [
      "Lower back pain & sciatica",
      "Disc bulge / herniation",
      "Lumbar spondylosis",
      "Postural back pain",
      "Sacroiliac joint dysfunction",
      "Facet joint syndrome",
    ],
    icon: "spine",
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Recovery",
    shortDesc:
      "Structured rehabilitation following orthopaedic or neurological surgery.",
    description:
      "Surgery is only half the battle — how you recover is equally important. Our post-surgical rehabilitation service provides structured, phased recovery programmes that restore strength, range of motion, and function following any orthopaedic or neurological procedure. We coordinate with your surgeon to ensure that every phase of your rehab aligns with your healing timeline. Our therapists are trained in post-operative protocols for knee replacements, hip replacements, spinal surgeries, and more. We track your progress closely and adjust the programme as you improve.",
    conditions: [
      "Knee & hip replacement rehab",
      "Spinal surgery recovery",
      "Rotator cuff repair rehab",
      "ACL reconstruction recovery",
      "Fracture rehabilitation",
      "Cardiac surgery mobility rehab",
    ],
    icon: "surgery",
  },
  {
    id: "neck-shoulder",
    title: "Neck & Shoulder Pain",
    shortDesc:
      "Relieve tension, stiffness, and pain in the neck and shoulder complex.",
    description:
      "Neck and shoulder pain has become increasingly common in the age of desk work and smartphones. Our therapists specialise in identifying the specific structures causing your discomfort — whether that is a tight muscle, a stiff joint, a pinched nerve, or referred pain — and treating it with precision. We use cervical mobilisation, soft tissue release, postural correction, and targeted strengthening to give you sustained relief. We also provide guidance on workstation ergonomics and posture habits that prevent recurrence.",
    conditions: [
      "Cervical spondylosis",
      "Frozen shoulder (adhesive capsulitis)",
      "Whiplash injuries",
      "Thoracic outlet syndrome",
      "Cervicogenic headaches",
      "Tech neck & desk posture pain",
    ],
    icon: "neck",
  },
  {
    id: "joint-arthritis",
    title: "Joint & Arthritis Care",
    shortDesc:
      "Manage arthritis pain and improve joint function with evidence-based therapy.",
    description:
      "Arthritis does not have to mean a life of reduced activity. Our joint care programme uses proven physiotherapy techniques to reduce pain, improve joint mobility, and strengthen the muscles that support your affected joints. We work with both osteoarthritis and rheumatoid arthritis patients to develop personalised management strategies that keep you active and independent. Hydrotherapy advice, joint protection techniques, and graded exercise programmes form the core of our approach. Many patients report significantly reduced pain and better function within weeks.",
    conditions: [
      "Knee osteoarthritis",
      "Hip osteoarthritis",
      "Rheumatoid arthritis management",
      "Gout rehabilitation",
      "Finger & wrist joint pain",
      "Ankle arthritis",
    ],
    icon: "joint",
  },
  {
    id: "neuro-rehab",
    title: "Neurological Rehab",
    shortDesc:
      "Specialised physiotherapy for stroke, Parkinson's, and nerve injury recovery.",
    description:
      "Neurological conditions require specialised physiotherapy that addresses both the physical and functional aspects of recovery. Our neurological rehabilitation programme is designed for patients recovering from stroke, managing Parkinson's disease, recovering from nerve injuries, or living with conditions like multiple sclerosis. We focus on retraining movement patterns, improving balance and coordination, and building the strength and confidence needed to regain independence. Our therapists use evidence-based neuroplasticity principles to maximise your recovery potential.",
    conditions: [
      "Stroke rehabilitation",
      "Parkinson's disease management",
      "Peripheral nerve injuries",
      "Guillain-Barré syndrome recovery",
      "Multiple sclerosis physiotherapy",
      "Foot drop treatment",
    ],
    icon: "neuro",
  },
];

export const REVIEWS = [
  {
    name: "Priya Venkataraman",
    initials: "PV",
    rating: 5,
    date: "March 2025",
    review:
      "I had severe lower back pain for almost two months and had seen two other doctors with no real improvement. After just four sessions at PhysioPoint, the pain was 80% gone. Dr. Sharma took the time to explain exactly what was causing the issue and gave me exercises I could do at home. The online booking made it so easy to fit sessions around my work schedule.",
  },
  {
    name: "Arjun Mehta",
    initials: "AM",
    rating: 5,
    date: "January 2025",
    review:
      "Recovered from an ACL surgery and was quite nervous about rehab. The team here was incredibly professional — they followed my surgeon's protocol exactly and pushed me at the right pace. I was back playing football six months post-op, which my surgeon said was ahead of schedule. Can't recommend this place enough for anyone going through post-surgical recovery.",
  },
  {
    name: "Kavitha Nair",
    initials: "KN",
    rating: 5,
    date: "February 2025",
    review:
      "I've been dealing with frozen shoulder for almost a year and had given up hope of full recovery. The physiotherapist here was patient, thorough, and really knew her stuff. The combination of manual therapy and the home exercise programme made a huge difference. Three months later and I have nearly full range of motion back. The clinic is clean, well-equipped, and the staff is always on time.",
  },
  {
    name: "Rajan Krishnaswamy",
    initials: "RK",
    rating: 5,
    date: "April 2025",
    review:
      "As a software engineer who spends 10+ hours at a desk, my neck and shoulder pain had become chronic. PhysioPoint not only treated the pain but also did a full workstation ergonomics review over video call and redesigned how I sit. It's been three months since treatment ended and I've stayed pain-free by following the advice. The online intake form was a nice touch — session time was spent on treatment, not paperwork.",
  },
];

export const FAQS = [
  {
    question: "How many physiotherapy sessions will I need?",
    answer:
      "The number of sessions varies depending on your condition, severity, and how your body responds to treatment. Most acute conditions (like a recent muscle strain) show significant improvement in 4–6 sessions. Chronic conditions or post-surgical rehabilitation typically require 8–16 sessions spread over several weeks. Your therapist will give you a personalised estimate at your first appointment after a full assessment.",
  },
  {
    question: "Do I need a doctor's referral to book an appointment?",
    answer:
      "No, you do not need a doctor's referral to see our physiotherapists. You can book directly online or via WhatsApp. However, if you have had recent surgery, imaging reports (X-rays, MRI), or specialist letters, please bring these to your first appointment as they help us plan your treatment more effectively.",
  },
  {
    question: "What should I wear to my physiotherapy session?",
    answer:
      "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower limb or back conditions, shorts are ideal. For shoulder or neck treatment, a sleeveless top or a shirt that can be easily removed is helpful. We have a changing area at the clinic if needed.",
  },
  {
    question: "Is physiotherapy painful?",
    answer:
      "Good physiotherapy should never cause sharp or severe pain. Some techniques — like deep tissue massage, joint mobilisation, or dry needling — may cause mild discomfort during the treatment, and you may feel some muscle soreness for 24–48 hours afterwards (similar to post-exercise soreness). Your therapist will always work within your comfort level and explain what they are doing and why.",
  },
  {
    question: "Do you offer home visit physiotherapy?",
    answer:
      "Yes, we offer home visit physiotherapy for patients who are unable to travel to the clinic — such as elderly patients, those recovering from major surgery, or those with mobility limitations. Please contact us via WhatsApp or phone to arrange a home visit. Home visits are available in Indiranagar and surrounding areas of Bengaluru.",
  },
];
