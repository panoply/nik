import m from 'mithril';

export default {
   view() {
      return [
         m('.container-fluid', [
            m('.hero.row.justify-content-center.align-items-center', [
               m('.col-12.col-sm-auto.text-center', [
                  m('.d-block.pb-2', [
                     m('.img-placeholder', [
                        m('img', {
                           src: "https://avatars2.githubusercontent.com/u/7041324?u=888d2c7af2f9938b0ad2d22118dec324fbbe3e8b&v=4"
                        })
                     ])
                  ]),
                  m("svg.hero__logo", m('use[xlink:href="icons.svg#logo"]')),
                  m('.sub-header', [
                     m('.d-inline.d-sm-block.pr-1.p-sm-0', [
                        m.trust("I'm a full stack web developer currently based out of the Netherlands.")
                     ]),
                     m('.d-inline.d-sm-block', [
                        m.trust("I establish an e-commerce nexus for fashion brands, labels and agencies.")
                     ])
                  ]),
                  m('.row.justify-content-center.align-items-center.pt-5', [
                     m('.col-auto', [
                        m('a[href="mailto:nicos@gmx.com"]', [
                           m("svg.icon", [
                              m('use[xlink:href="icons.svg#mail"]')
                           ])
                        ])
                     ]),
                     m('.col-auto', [
                        m('a[href="https://instagram.com/heynicos"]', [
                           m("svg.icon-instagram", [
                              m('use[xlink:href="icons.svg#instagram"]')
                           ])
                        ])
                     ]),
                     m('.col-auto', [
                        m('a[href="https://twitter.com/heynicos"]', [
                           m("svg.icon", [
                              m('use[xlink:href="icons.svg#twitter"]')
                           ])
                        ])
                     ]),
                     m('.col-auto', [
                        m('a[href="https://github.com/panoply"]', [
                           m("svg.icon-github", [
                              m('use[xlink:href="icons.svg#github"]')
                           ])
                        ])
                     ]),
                     m('.col-auto', [
                        m('a[href="https://www.linkedin.com/in/nikolassavvidis/"]', [
                           m("svg.icon-github", [
                              m('use[xlink:href="icons.svg#linkedin"]')
                           ])
                        ])
                     ])
                  ])
               ])
            ])
         ])
      ];
   }
};
