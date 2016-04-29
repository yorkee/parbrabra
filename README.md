# parbrabra
The story of parentheses (), braces {}, and brackets[] ......


given a string with parentheses, braces and brackets, it should close metch and close properly.

eg:

parbrabra("{([hello])}");

or

parbrabra("{[hello]}()");

or 

parbrabra("[][]{[hello]()}");


should return true because all brackets match.




parbrabra("{{{");

or 

parbrabra("[hello");

or

parbrabra("[{hello}]");

should return false because all brackets not sequentally match.

