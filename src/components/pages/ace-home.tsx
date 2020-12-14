import { Component, h } from '@stencil/core';

@Component({
  tag: 'ace-home',
})
export class AppHome {
  render() {
    return (
      <div class="ace-home">
        <div class="wrapper">
          <div class="row">
            <div class="large-4 medium-4 small-12 columns home">
              <h1 class="home-title">
                &lt; A Curious Engineer /&gt;
              </h1>
              <h2 class="home-subtitle">
                IT Engineer + Developer + Audio Maniac
              </h2>
              <div class="row">
                <nav id="nav" class="large-4 large-centered medium-4 medium-centered small-4 small-centered columns home-menu-wrapper show-for-large">
                  <ul class="vertical home-menu">
                    <li><a href="work">work</a></li>
                    <li><a href="about">about me</a></li>
                    <li><a href="contact">contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="large-4 large-offset-4 medium-4 medium-offset-4 socials">
              <a href="https://twitter.com/nirigaudiere"target="_blank" rel="noreferrer noopener">
                <img src="assets/img/icons/tw.svg" alt="Twitter" />
              </a>
              <a href="https://github.com/nrigaudiere"target="_blank" rel="noreferrer noopener">
                <img src="assets/img/icons/gh.svg" alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/nicolasr1"target="_blank" rel="noreferrer noopener">
                <img src="assets/img/icons/in.svg" alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
