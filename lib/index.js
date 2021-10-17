/**
 * @fileoverview A for-fun plugin that checks if multiline comments are in a certain format (haiku, iambic pentameter, etc.)
 * @author D. Topp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
