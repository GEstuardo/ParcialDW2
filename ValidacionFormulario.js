class Validation
{

    constructor(formId)
    {
        // Form globals
        this.form = $("#" + formId);
        this.submitButton = $(this.form).find('input[type="submit"]');
        this.submitButtonText = this.submitButton.val();

        // Global input array
        this.inputLog = [];

        // Basic css classes
        this.validC = "is-valid";
        this.invalidC = "is-invalid";

        // Enables submit listener
        this.checkAll();
    }

/*
        dpi
    */
   requireTextDPI(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }
   /*
        Nit
    */
   requireTextNIT(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }
    /*
        Nombre.
    */
    requireTextNombre(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
    {
        let input = $("#" + inputId);
        let invalidString = "";

        // Create requried *
        this.createAsterisk(input);

        // Add this input to the input log, for easy check alls
        this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
            
        // Check string for issues while editing
        $(input).on('input focus', input, () =>
        {
            // Append any invalid issues to string when editing
            invalidString = "";
            invalidString += this.lengthCheck(input, minLength, maxLength);
            invalidString += this.illegalCharCheck(input, illegalCharArray);
            this.showWarning(input, inputId, invalidString);
        });

        // Enable submit again on an input change
        $(input).on('input', input, () =>
        {
            this.submitDisabled(false, this.submitButtonText);
        });

        // Check string for issues after editing
        $(input).on('focusout', input, () =>
        {
            invalidString += this.necessaryCharCheck(input, necessaryCharArray);
            this.showWarning(input, inputId, invalidString);
            // Remove green border
            this.removeValid(input);
        });

        return invalidString;
    }
    /*
        Nombre2.
    */
   requireTextNombre2(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

     /*
        Apellido
    */
   requireTextApellido(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

     /*
        Apellido2
    */
   requireTextApellido2(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

    /*
        FechaNac
    */
   requireTextFechaNac(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

 /*
        Nominal
    */
   requireTextNominal(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

 /*
        Funcional
    */
   requireTextFuncional(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }
   
 /*
        Area
    */
   requireTextArea(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

    /*
     email 
    */
    requireEmail(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
    {
        let input = $("#" + inputId);
        let invalidString = "";

        // Create requried *
        this.createAsterisk(input);

        // Add this input to the input log, for easy check alls
        this.inputLog.push(["requireEmail", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
            
        // Check string for issues while editing
        $(input).on('input focus', input, () =>
        {
            // Append any invalid issues to string when editing
            invalidString = "";
            invalidString += this.lengthCheck(input, minLength, maxLength);
            invalidString += this.illegalCharCheck(input, illegalCharArray);
            this.showWarning(input, inputId, invalidString);
        });

        // Enable submit again on an input change
        $(input).on('input', input, () =>
        {
            this.submitDisabled(false, this.submitButtonText);
        });

        // Check string for issues after editing
        $(input).on('focusout', input, () =>
        {
            invalidString += this.necessaryCharCheck(input, necessaryCharArray);
            invalidString += this.emailCheck(input);
            this.showWarning(input, inputId, invalidString);
            // Remove green border
            this.removeValid(input);
        });

        return invalidString;
    }

/*
     email2 
    */
   requireEmail2(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireEmail2", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           invalidString += this.emailCheck(input);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

/*
        Casa
    */
   requireTextCasa(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }

/*
        Celular
    */
   requireTextCelular(inputId, minLength, maxLength, illegalCharArray, necessaryCharArray)
   {
       let input = $("#" + inputId);
       let invalidString = "";

       // Create requried *
       this.createAsterisk(input);

       // Add this input to the input log, for easy check alls
       this.inputLog.push(["requireText", inputId, minLength, maxLength, illegalCharArray, necessaryCharArray]);
           
       // Check string for issues while editing
       $(input).on('input focus', input, () =>
       {
           // Append any invalid issues to string when editing
           invalidString = "";
           invalidString += this.lengthCheck(input, minLength, maxLength);
           invalidString += this.illegalCharCheck(input, illegalCharArray);
           this.showWarning(input, inputId, invalidString);
       });

       // Enable submit again on an input change
       $(input).on('input', input, () =>
       {
           this.submitDisabled(false, this.submitButtonText);
       });

       // Check string for issues after editing
       $(input).on('focusout', input, () =>
       {
           invalidString += this.necessaryCharCheck(input, necessaryCharArray);
           this.showWarning(input, inputId, invalidString);
           // Remove green border
           this.removeValid(input);
       });

       return invalidString;
   }


    // Checks if too long or short
    lengthCheck(input, minLength, maxLength)
    {
        if (input.val().length <= minLength)
        {
            return "El campo es valido a partir de " + minLength + " caracteres. ";
        }
        else if (input.val().length >= maxLength)
        {
            return "El campo no es valido a partir de " + maxLength + " caracteres. ";
        }
        else
        {
            return "";
        }
    }

    // Checks if contains unwanted text
    illegalCharCheck(input, illegalCharArray)
    {
        // Reset loop stringe
        let illegalsUsed = "";
        // loop through each illegal item to check for
        $(illegalCharArray).each(function()
        {
            if (input.val().indexOf(this) >= 0)
            {
                // Append illegal strings to var
                // check if char is a space
                if (!this.trim().length == 0)
                {
                    illegalsUsed += " " + this;   
                }
                else
                {
                    illegalsUsed += " spaces"
                }
            }
        });

        // Create output based on result of illegals concatination
        if (illegalsUsed === "")
        {
            return "";
        }
        else
        {
            return "Cannot use:" + illegalsUsed + ". ";
        }
    }

    // Check if doesnt contain needed text
    necessaryCharCheck(input, necessaryCharArray)
    {
        let notUsed = "";
        // loop through each illegal item to check for
        $(necessaryCharArray).each(function()
        {
            if (!(input.val().indexOf(this) >= 0))
            {
                notUsed += " " + this;
            }
        });

        // Create output based on result of illegals concatination
        if (notUsed === "")
        {
            return "";
        }
        else
        {
            return "Must contain:" + notUsed + ". ";
        }
    }


    // Use regex to require an email
    emailCheck(input)
    {
        if (input.val().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        {
            return "";
        }
        else
        {
            return "No es un e-mail válido";
        }
    }


    // Enable/Disable the submit button, and change its value
    submitDisabled(trueFalse, value)
    {
        $(this.submitButton).prop('disabled', trueFalse);
        $(this.submitButton).val(value);
    }



    checkAll()
    {
        $(this.form).submit( (e) =>
        {
            // Loop through every input added to object
            $(this.inputLog).each( (i) =>
            {
                // Reset loop variables
                let invalidString = "";
                let invalidCheckString = "";
                let thisLog = this.inputLog[i];


                // Check for issues
                invalidString = "";
                invalidString += this.lengthCheck(input, minLength, maxLength);
                invalidString += this.illegalCharCheck(input, illegalCharArray);
                invalidString += this.necessaryCharCheck(input, necessaryCharArray);
                if (thisLog[0] === "requireEmail")
                {
                    invalidString += this.emailCheck(input);
                }
               

                // Display issues
                if (invalidString)
                {
                    this.showWarning(input, inputId, invalidString);
                    this.submitDisabled(true, "Error, por favor revise su formulario");
                    // Stop submission
                    e.preventDefault();
                }
                if (invalidCheckString)
                {
                    this.showWarning(passConfirm, passConfirmId, invalidCheckString);
                    this.submitDisabled(true, "Error, por favor revise su formulario");
                    // Stop submission
                    e.preventDefault();
                }


            });

        });

    }


    // Perform restrictions depending on the input
    showWarning(input, inputId, invalidString)
    {
        // Provide proper styling and feedback
        if (invalidString)
        {
            this.generateFeedback(input, inputId, "invalid-feedback", invalidString);
            this.makeInvalid(input);
        }
        else
        {
            this.generateFeedback(input, inputId, "", "");
            this.makeValid(input);
        }
    }

    // Adds a valid class to element and removes invalid
    makeValid(element)
    {
        if (!element.hasClass(this.validC))
        {
            element.addClass(this.validC);
        }
        // Remove invalid class if it exists
        if (element.hasClass(this.invalidC))
        {
            element.removeClass(this.invalidC);
        }
    }

    // Adds a valid class to element and removes invalid
    removeValid(element)
    {
        // Remove invalid class if it exists
        if (element.hasClass(this.validC))
        {
            element.removeClass(this.validC);
        }
    }

    // adds invalid class to element and removes valid class
    makeInvalid(element)
    {
        if (!element.hasClass(this.invalidC))
        {
            element.addClass(this.invalidC);
        }
        // Remove valid class
        if (element.hasClass(this.validC))
        {
            element.removeClass(this.validC);
        }
    }



    // Create required asterisk after text
    createAsterisk(input)
    {
        $("<span class='text-danger'>*</span>").insertBefore(input)
    }


    // Creates responsive tiny text below inputs to inform user of issues
    generateFeedback(input, inputId, validityClass, prompt)
    {
        // Delete feedback if it already exists to make room for new content
        $('#' + inputId + '-feedback').remove();
        
        // Create feedback element if it does not exist
        $('<div id="' + inputId + '-feedback" class="' + validityClass + '">' + prompt + '</div>').insertAfter(input);
    }



}