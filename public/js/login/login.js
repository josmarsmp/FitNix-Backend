"use strict";

// Class Definition
var KTLogin = function() {
    var _login;

    var _showForm = function(form) {
        var cls = 'login-' + form + '-on';
        var form = 'kt_login_' + form + '_form';

        _login.removeClass('login-forgot-on');
        _login.removeClass('login-signin-on');
        _login.removeClass('login-signup-on');

        _login.addClass(cls);

        KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
    }

    var _handleSignInForm = function() {

        // Handle forgot button
        $('#kt_login_forgot').on('click', function (e) {
            e.preventDefault();
            _showForm('forgot');
        });

    }

    var _handleSignUpForm = function() {

        $('#agree').on( 'click', function() {
            $('.terms-check').addClass('d-none');
        });

        $('#kt_login_signup_submit').on('click', function (e) {
            e.preventDefault();

            if( !$('#agree').prop('checked') ) {
                
                $('.terms-check').removeClass('d-none');

            } else {
                $('#kt_login_signup_form').trigger('submit');
            }
        });

    }

    var _handleForgotForm = function(e) {

        // Handle cancel button
        $('#kt_login_forgot_cancel').on('click', function (e) {
            e.preventDefault();

            _showForm('signin');
        });
    }

    // Public Functions
    return {
        // public functions
        init: function() {
            _login = $('#kt_login');
            _handleSignUpForm();
            _handleSignInForm();
            _handleForgotForm();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTLogin.init();
});