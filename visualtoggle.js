function SwitchContent( Name, Index, Min, Max ) 
{
	for(var i = Min; i <= Max; i++)
	{
		if(i != Index)
		{
			var elements = document.getElementsByName(Name +"_" +i.toString());

			for(var o = 0; o < elements.length; o++) 
			{
				elements[o].style.display = "none";
				elements[o].style.visibility = "hidden";
			}
		}
		else
		{
			var elements = document.getElementsByName(Name +"_" +i.toString());
			for(var o = 0; o < elements.length; o++) 
			{
				elements[o].style.display = "block";
				elements[o].style.visibility = "visible";
			}
		}
	}
} 

function HideContent( Hide ) 
{
	var elements = document.getElementsByName(Hide);
	for(var i = 0; i < elements.length; i++) 
	{
		elements[i].style.display = "none";
		elements[i].style.visibility = "hidden";
	}
}

function ShowContent( Show ) 
{
	var elements = document.getElementsByName(Show);
	for(var i = 0; i < elements.length; i++) 
	{
		elements[i].style.display = "block";
		elements[i].style.visibility = "visible";
	}
} 

function ToggleContent( Show ) 
{
	var elements = document.getElementsByName(Show);
	for(var i = 0; i < elements.length; i++) 
	{
		if(elements[i].style.visibility == "visible")
		{
			elements[i].style.display = "none";
			elements[i].style.visibility = "hidden";
		}
		else
		{
				elements[i].style.display = "block";
			elements[i].style.visibility = "visible";
		}
	}
} 

function ToggleText( Id, Text, TextB )
{
	var elements = document.getElementsByName(Id);
	for(var i = 0; i < elements.length; i++) 
	{
		if(elements[i].innerText == Text)
		{
			elements[i].innerText = TextB;
		}
		else
		{
			elements[i].innerText = Text;
		}
	}
}