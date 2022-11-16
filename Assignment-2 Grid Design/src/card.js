let card_data = [
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    title: "machine_learning_courses_online",
    text: "Introduction To A Machine Learning Online Course",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 23 Aug 2019",
    article:
      "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
    title: "LAMP Stack Vs MEAN stack.",
    text: "LAMP Stack Vs MEAN stack.",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 24 Aug 2019",
    article:
      "In today’s dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement....",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
    title: "Impact of Cloud Computing ",
    text: "Impact of Cloud Computing in various...",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 24 Aug 2019",
    article:
      "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using Cloud.",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
    title: "Machine Learning in Big Data Analytic",
    text: "Challenges of Machine Learning in Big Data Analytics",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 24 Aug 2019",
    article:
      "Machine Learning is a subset of artificial intelligence which is an important part of computer science.The revolution of Big Data promises to transform the...",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
    title: "Breaking the Myths around Cybersecurity",
    text: "Breaking the Myths around Cybersecurity",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 26 Aug 2019",
    article:
      "Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in...",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
    title: "Importance of Data Backup and Recovery",
    text: "Importance of Data Backup and Recovery",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 26 Aug 2019",
    article:
      "A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main.",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
    title: "Web Scraping",
    text: "What is Web Scraping?",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 25 Sep 2019",
    article:
      "Simply put, web scraping is one of the tools developers use to gather and analyze information from the internet. Some websites and platforms offer application...",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
    title: "Income Share Agreement",
    text: "What is Income Share Agreement?",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_text: "| 14 Oct 2019",
    article:
      "The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman,...",
  },
  {
    link: "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
    title: "Machine Learning with Python",
    text: "Practical Machine Learning with Python...",
    h_link:
      "https://www.edyoda.com/stories/a-primer-on-python-programming-tutorial-for-beginners",
    s_link: "| 16 Oct 2019",
    article:
      "Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively...",
  },
];

function Card() {
  return (
    <>
      <div class="cards">
        {card_data.map((data) => {
          return (
            <div class="card">
              <img src={data.link} alt="image" title={data.title} />
              <div class="text_section">
                <h4 class="title">{data.text}</h4>
                <div class="author_container">
                  <a href={data.s_link} target="_blank">
                    EdYoda
                  </a>
                  <span>{data.s_text}</span>
                </div>
                <article>{data.article}</article>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
