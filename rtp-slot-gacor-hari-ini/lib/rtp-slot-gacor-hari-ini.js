'use babel';

import RtpSlotGacorHariIniView from './rtp-slot-gacor-hari-ini-view';
import { CompositeDisposable } from 'atom';

export default {

  rtpSlotGacorHariIniView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rtpSlotGacorHariIniView = new RtpSlotGacorHariIniView(state.rtpSlotGacorHariIniViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rtpSlotGacorHariIniView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rtp-slot-gacor-hari-ini:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rtpSlotGacorHariIniView.destroy();
  },

  serialize() {
    return {
      rtpSlotGacorHariIniViewState: this.rtpSlotGacorHariIniView.serialize()
    };
  },

  toggle() {
    console.log('RtpSlotGacorHariIni was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
