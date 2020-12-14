import { Component, h } from '@stencil/core';

@Component({
  tag: 'ace-root',
})
export class ACERoot {
  render() {
    return (
      <div>
        <header>

        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="ace-home" exact={true} />
              <stencil-route url="/work" component="ace-work" componentProps={ { name: "toto" } } exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
