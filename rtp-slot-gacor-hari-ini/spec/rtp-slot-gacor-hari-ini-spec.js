'use babel';

import RtpSlotGacorHariIni from '../lib/rtp-slot-gacor-hari-ini';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('RtpSlotGacorHariIni', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('rtp-slot-gacor-hari-ini');
  });

  describe('when the rtp-slot-gacor-hari-ini:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.rtp-slot-gacor-hari-ini')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'rtp-slot-gacor-hari-ini:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.rtp-slot-gacor-hari-ini')).toExist();

        let rtpSlotGacorHariIniElement = workspaceElement.querySelector('.rtp-slot-gacor-hari-ini');
        expect(rtpSlotGacorHariIniElement).toExist();

        let rtpSlotGacorHariIniPanel = atom.workspace.panelForItem(rtpSlotGacorHariIniElement);
        expect(rtpSlotGacorHariIniPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'rtp-slot-gacor-hari-ini:toggle');
        expect(rtpSlotGacorHariIniPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.rtp-slot-gacor-hari-ini')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'rtp-slot-gacor-hari-ini:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let rtpSlotGacorHariIniElement = workspaceElement.querySelector('.rtp-slot-gacor-hari-ini');
        expect(rtpSlotGacorHariIniElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'rtp-slot-gacor-hari-ini:toggle');
        expect(rtpSlotGacorHariIniElement).not.toBeVisible();
      });
    });
  });
});
