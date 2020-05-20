import React, { Component } from "react"
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import "./pages.css"

class BooksPage extends Component {
  render() {
    const { data } = this.props;

    const BOOK_CLUB_DATA = [
      {
        month: 'January',
        link: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
        link_aria: "Details of Atomic Habits on Goodreads.com",
        image: data.atomicHabits.childImageSharp.fixed,
        alt: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones - By James Clear"
      },
      {
        month: 'February',
        link: 'https://www.goodreads.com/book/show/41104077-invisible-women',
        link_aria: "Details of Invisible Women on Goodreads.com",
        image: data.invisibleWomen.childImageSharp.fixed,
        alt: "Invisible Women: Exposing Data Bias in a World Designed for Men - By Caroline Criado-Perez"
      },
      {
        month: 'March',
        link: 'https://www.goodreads.com/en/book/show/38900866-it-doesn-t-have-to-be-crazy-at-work',
        link_aria: "Details of It Doesn't Have to Be Crazy at Work on Goodreads.com",
        image: data.itDoesntHaveToBeCrazyAtWork.childImageSharp.fixed,
        alt: "It Doesn't Have to Be Crazy at Work - By David Heinemeier Hansson and Jason Fried"
      }
    ];

		const BOOK_CLUB_HTML = BOOK_CLUB_DATA.map(function(book, index) {
			return (
        <div className="book">
          <h1>{book.month}</h1>
          <a href={book.link} target="_blank">
            <Img fixed={book.image} alt={book.alt} />
          </a>
          <a href={book.link} className="button button-border" target="_blank" rel="noopener noreferrer" aria-label={book.link_aria}>
            Details
          </a>
        </div>
			)
    });

    return (
      <div className="page">
        <SEO title="Ladybug Podcast" />
        <PageHeader />

        <main style={{ marginBottom: "40px" }}>
          <div className="page-banner">
            <h1>Book Club</h1>
          </div>
          <p className="banner-margin">
            We've started a book club! Each month we'll be reading a popular
            non-fiction book and bringing you an extra episode to discuss our
            thoughts.
          </p>
          <p>
            If you'd like to follow along, feel free to join our{" "}
            <a
              href="https://www.goodreads.com/group/show/1056127-ladybug-podcast-book-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goodreads group
            </a>
            .
          </p>
          <div className="bookshelf">
            {BOOK_CLUB_HTML}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export const AllBooksQuery = graphql`
  {
    atomicHabits: file(relativePath: { eq: "books/habits.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    invisibleWomen: file(relativePath: { eq: "books/invisible-women.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    itDoesntHaveToBeCrazyAtWork: file(
      relativePath: { eq: "books/it-doesnt-have-to-be-crazy-at-work.jpg" }
    ) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default BooksPage
