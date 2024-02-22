import React from 'react'

const About = () => {
  return (
    <>
      <div className='about-title text-center'>
        <h2 className='text-center'>
          Welcome to the "The Most Awesome Movie Finder App EVER"
        </h2>

        <h3>
          Your Ultimate Movie Discovery Companion!
        </h3>
      </div>

      <div className="about-info my-5">
        <section>
          <h4>
            Our Mission
          </h4>

          <p>
            Our mission is simple: to connect movie enthusiasts with the films they will love, from blockbuster hits to indie gems, from timeless classics to the latest releases. We understand that finding the right movie can be like searching for a needle in a haystack. That's where "The Most Awesome Movie Finder App EVER" comes in – to transform that search into an enjoyable journey, guiding you to your next favorite movie with ease and precision.
          </p>
        </section>

        <section>
          <h4>
            What Sets Us Apart
          </h4>

          <ul>
            <li className='mb-2'>
              <strong>Personalized Recommendations:</strong> Our sophisticated algorithm learns your preferences over time, offering tailored suggestions that match your tastes and mood.
            </li>
            <li className='mb-2'>
              <strong>Comprehensive Database:</strong> With access to an extensive library of movies from around the globe, we ensure you have a wide array of options at your fingertips.
            </li>
            <li className='mb-2'>
              <strong>User-Friendly Interface:</strong> Designed with you in mind, our app provides a seamless and intuitive experience, making movie discovery a pleasure, not a chore.
            </li>
            <li className='mb-2'>
              <strong>Community Engagement:</strong> Join a vibrant community of movie lovers, share reviews, and engage in discussions. Your next movie recommendation could come from a fellow cinephile!
            </li>
            <li>
              <strong>Expert Insights:</strong> Dive deeper into the world of cinema with articles, interviews, and behind-the-scenes content curated by our team of movie aficionados
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default About