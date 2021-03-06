import React, { Component, ReactElement } from 'react'

export default class IndexPage extends Component<any, any> {
  render(): ReactElement {
    return (
      <article>
        <h2>Welcome to React Easyroute homepage!</h2>

        <p>React Easyroute - is a simple and convenient router for React.js</p>

        <p>
          <strong>TL;DR Features:</strong>
        </p>
        <ul>
          <li>Config-based router (just like Vue Router)</li>
          <li>Dynamic route matching</li>
          <li>Nested routes</li>
          <li>Lazy route component loading outside the box</li>
          <li>Programmatic navigation</li>
          <li>Named routes</li>
          <li>Named outlets (views)</li>
          <li>Global and individual navigation hooks</li>
          <li>Controlling data loading via route metadata</li>
          <li>Hash, history and silent modes</li>
          <li>TypeScript support</li>
        </ul>

        <p>Why you should try it?</p>
        <ol>
          <li>
            Well-known syntax.
            <br />
            It was inspired by the router for Vue.js, so this router will be understandable to many of you.
          </li>
          <li>
            Still developing. Many features of the router are still ahead. Already now it can be used in projects, and
            I’m happy to know what will make it better.
          </li>
          <li>Community-friendly. Repository cloning and pull requests are welcome!</li>
        </ol>
      </article>
    )
  }
}
