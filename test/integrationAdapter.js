'use strict';

const path = require('path');
const {tests} = require('@iobroker/testing');

// Run tests
tests.integration(path.join(__dirname, '..'), {

    defineAdditionalTests(getHarness) {

        describe('Test sendTo()', () => {

            it('Should work', () => {
                return new Promise(resolve => {
                    // Create a fresh harness instance each test!
                    const harness = getHarness();
                    // Start the adapter and wait until it has started
                    harness.startAdapterAndWait().then(() => {

                        harness.sendTo('hm-rega.0', 'test', 'message', (resp) => {
                            console.dir(resp);
                            resolve();
                        });
                    });
                });
            });

        });
    }
});