// =========================================================================
// WAVES
// =========================================================================

// For .btn classes


angular.module('test.app')

    .directive('btn', function () {
        return {
            restrict: 'C',
            link: function (scope, element) {
                if (element.hasClass('btn-icon') || element.hasClass('btn-float')) {
                    Waves.attach(element, ['waves-circle']);
                }

                else if (element.hasClass('btn-light')) {
                    Waves.attach(element, ['waves-light']);
                }

                else {
                    Waves.attach(element);
                }

                Waves.init();
            }
        }
    })
