let questions = [
	/* 
		question => texto da questão 
		answers => array com objetos de alternativas de resposta
			answers: text => texto da alternativa
			answers: correct => boolean indicando se a alternativa é correta
		feedbackPositivo => texto de feedback da questão quando o aluno responde corretamente
		feedbackNegativo => texto de feedback da questão quando o aluno responde incorretamente
		id => ID da tag HTML onde as questões serão exibidas
		classe => Classe que será atribuída à principal div da questão 'container-fluid mt-5 question-main-container'
		classeFeedbackPositivo => Classe que será atribuída à caixa de feedback quando o aluno responde corretamente
		classeFeedbackNegativo => Classe que será atribuída à caixa de feedback quando o aluno responde incorretamente
	*/
	{
		question: '',
		answers: [


			{ text: '<p class="size_question text-dark pl-3 ml-3 mb-3" style="margin-top:-30px" > trata-se de software livre e gratuito, tanto a distribuição básica quanto os pacotes a ele acrescidos mediante contribuições desenvolvidas pela sua comunidade.</p>', correct: false },
			{ text: '<p class="size_question text-dark pl-3 ml-3" style="margin-top:-50px"  > tem excelente desempenho em cenários em que os dados operados possam ser mantidos e manipulados em RAM.</p>', correct: false },
			{ text: '<p class="size_question text-dark pl-3"  > é um tipo de "bala de prata", por ser aplicável em qualquer cenário ou projeto.</p>', correct: true },
			{ text: '<p class="size_question text-dark pl-3 mb-5"  > é popular na indústria, assim como em meio acadêmico.</p>', correct: false },


			

		], 
		feedbackPositivo: '<div style="font-size: 1rem;"><p class="mb-0 text-success"><strong>É isso aí! Sabe tudo!</strong> </div>', 
		feedbackNegativo: '<div style="font-size: 1rem;"><p class="mb-0 text-danger" ><strong>Ops! Tente novamente</div>', 
		classe: 'aclass',
		id: 'questions1',
		classeFeedbackPositivo: 'feedback-positivo',
		classeFeedbackNegativo: 'feedback-negativo',
		
	},

	{
		question: ''
		
		
,
		answers: [


			{ text: '<p class=" pl-3 size_question"> 18</p>', correct: false },
			{ text: '<p class=" pl-3 size_question"> 9</p>', correct: false },
			{ text: '<p class=" pl-3 size_question"> 6</p>', correct: true },
			{ text: '<p class=" pl-3 size_question mb-5"> 3</p>', correct: false },

		], 
		feedbackPositivo: '<div style="font-size: 1rem;"><p class="mb-0 text-success"><strong>É isso ai! Você entendeu o conceito!</strong> </div>', 
		feedbackNegativo: '<div style="font-size: 1rem;"><p class="mb-0 text-danger" ><strong>Ops! Tente novamente</div>', 
		classe: 'aclass',
		id: 'questions2',
		classeFeedbackPositivo: 'feedback-positivo',
		classeFeedbackNegativo: 'feedback-negativo',
		
	},
{
	question: '',
	answers: [


		{ text: '<p class=" pl-3 size_question"> Lista</p>', correct: false },
		{ text: '<p class=" pl-3 size_question"> Dataframe</p>', correct: true },
		{ text: '<p class=" pl-3 size_question"> Array</p>', correct: false },
		{ text: '<p class=" pl-3 mb-5 size_question"> Vetor</p>', correct: false },



	], 
	feedbackPositivo: '<div style="font-size: 1rem;"><p class="mb-0 text-success"><strong>É isso ai! Você entendeu o conceito!</strong> </div>', 
	feedbackNegativo: '<div style="font-size: 1rem;"><p class="mb-0 text-danger" ><strong>Ops! Tente novamente</div>', 

	classe: 'aclass',
	id: 'questions3',
	classeFeedbackPositivo: 'feedback-positivo',
	classeFeedbackNegativo: 'feedback-negativo',
	
},
{
	question: '',
	answers: [


		{ text: '<p class="pl-3 size_question"> Lista</p>', correct: true },
		{ text: '<p class="pl-3 size_question"> Array</p>', correct: false },
		{ text: '<p class="pl-3 size_question"> Dataframe</p>', correct: false },
		{ text: '<p class="pl-3 mb-5 size_question"> Vetor Atômico</p>', correct: false },



	], 
	feedbackPositivo: '<div style="font-size: 1rem;"><p class="mb-0 text-success"><strong>É isso aí! Sabe tudo!</strong> </div>', 
	feedbackNegativo: '<div style="font-size: 1rem;"><p class="mb-0 text-danger" ><strong>Ops! Tente novamente</div>', 

	classe: 'aclass',
	id: 'questions4',
	classeFeedbackPositivo: 'feedback-positivo',
	classeFeedbackNegativo: 'feedback-negativo',
	
},
{
	question: '',
	answers: [


		{ text: '<p class=" pl-3 size_question"> contribuintes$isento <- [contribuintes$rendMensal <= 1903.98]</p>', correct: false },
		{ text: '<p class=" pl-3 size_question"> contribuintes$isento <- contribuintes$rendMensal <= 1903.98</p>', correct: true },
		{ text: '<p class=" pl-3 size_question"> contribuintes$isento <- rendMensal <= 1903.98</p>', correct: false },
		{ text: '<p class="mb-5 pl-3 size_question"> nenhuma das respostas anteriores.</p>', correct: false },



	], 
	feedbackPositivo: '<div style="font-size: 1rem;"><p class="mb-0 text-success"><strong>É isso ai! Você entendeu o conceito!	</strong> </div>', 
	feedbackNegativo: '<div style="font-size: 1rem;"><p class="mb-0 text-danger" ><strong>Ops! Tente novamente</div>', 

	classe: 'aclass',
	id: 'questions5',
	classeFeedbackPositivo: 'feedback-positivo',
	classeFeedbackNegativo: 'feedback-negativo',
	
}


]






















$(document).ready(function () {
	for (let i in questions) {
		let question = questions[i]

		let container = $(`#${question.id}`)
		if (!container.length) {
			console.warn('############')
			console.warn(`####### ATENÇÃO: O elemento #${question.id} não foi encontrado no documento HTML.`)
			console.warn(`####### QUESTÃO: ${question.question}`)
			console.warn('############')
			continue;
		}

		let questionDiv = $('<div>')
		questionDiv.addClass(`container-fluid question-main-container ${question.classe}`)
		questionDiv.attr('id', `question-${i}-main-container`)
		questionDiv.data('question', question)

		let div2 = $('<div>')
		div2.addClass('container radius1')

		let div3 = $('<div>')
		div3.addClass('row align-items-center justify-content-center')

		let div4 = $('<div>')
		div4.addClass('col-12 ')

		let form = $('<form>')
		form.addClass('form')

		let h2 = $('<h3>')
		h2.addClass('')

		let h2Div = $('<div>')
		h2Div.addClass('')

		let tituloQuestao = $('<span>')

		let alternatives = $('<div>')
		alternatives.addClass('alternatives')

		let type = question.answers.filter(el => {
			return el.correct
		}).length > 1 ? 'checkbox' : 'radio'

		for (let j in question.answers) {
			let alternative = question.answers[j]

			let divAlternative = $('<div>')
			divAlternative.addClass('inputGroup')

			let input = $('<input>')
			input.attr('type', type)
			input.attr('name', `questao-${i}`)
			input.attr('id', `questao-${i}-opcao${j}`)
			input[0].dataset.index = j

			let label = $('<label>')
			label.attr('for', `questao-${i}-opcao${j}`)

			label.append(alternative.text)
			divAlternative.append(input)
			divAlternative.append(label)
			alternatives.append(divAlternative)
		}

		let actionsP = $('<p>')
		feedbackBtn = $('<button> ')
		feedbackBtn.addClass('btn text-white bg-dark')
		feedbackBtn.css('border-radius', '7px',)
		feedbackBtn.attr('type', 'button')
		feedbackBtn.attr('data-toggle', 'collapse')
		feedbackBtn.attr('data-target', `#feedback-question-${i}`)
		feedbackBtn.attr('aria-expanded', 'false')
		feedbackBtn.attr('aria-controls', `feedback-question-${i}`)
		feedbackBtn.click(function (evt) {
			let questionContainer = this.closest('.question-main-container')
			let question = $(questionContainer).data('question')

			// Respostas do aluno para salvar como analytics (ainda não é utilizado)
			let selection = questionContainer.querySelectorAll('input:checked')

			if (selection.length === 0) {
				evt.stopImmediatePropagation()
				return
			}

			// Opções disponíveis e contagem de respostas corretas
			let totalCorretas = 0
			let corretasUsuario = 0

			for (let i in selection) {
				if (typeof selection[i] === 'object') {
					let answerIndex = selection[i].dataset.index
					if (question.answers[answerIndex].correct) {
						corretasUsuario++
					}
				}
			}

			for (let i in question.answers) {
				let answer = question.answers[i]
				let answerInput = questionContainer.querySelector(`[data-index="${i}"]`)
				answerInput.setAttribute('disabled', 'true')

				if (answer.correct) {
					$(answerInput).addClass('correct')
					totalCorretas++
				} else {
					$(answerInput).addClass('incorrect')
				}
			}

			let feedbackText = questionContainer.querySelector('.feedback-text')

			if (corretasUsuario === totalCorretas) {
				$(feedbackText).empty().append(question.feedbackPositivo)

				if (question.classeactionsPositivo) {
					$(feedbackText.closest('.collapse')).addClass(question.classeactionsPositivo)
				}

				if (question.ifCorrect) {
					if (typeof question.ifCorrect.achievement === 'object' && question.ifCorrect.achievement.length > 0) {
						question.ifCorrect.achievement.forEach(el => {
							$(`.achievements-step:nth-child(${el})`).addClass('completed')
							$(`.achievements-step:nth-child(${el})`).addClass('animate')
							document.querySelector(`.achievements-step:nth-child(${el})`).addEventListener('animationend', function () {
								$(this).removeClass('animate')
							})
						})
					} else {
						$(`.achievements-step:nth-child(${question.ifCorrect.achievement})`).addClass('completed')
						$(`.achievements-step:nth-child(${question.ifCorrect.achievement})`).addClass('animate')
						document.querySelector(`.achievements-step:nth-child(${question.ifCorrect.achievement})`).addEventListener('animationend', function () {
							$(this).removeClass('animate')
						})
					}

					$(`#${question.ifCorrect.unlockId}`).removeClass('locked')
					$(`.${question.ifCorrect.unlockId}`).removeClass('locked')
					$(`.${question.ifCorrect.unlockId} span.padlock`).remove()
					$(`[hide-by="${question.ifCorrect.unlockId}"]`).hide() 

				}

				$(questionContainer.querySelector('.btn.try-again')).hide(0)
			} else {
				$(feedbackText).empty().append(question.feedbackNegativo)

				if (question.feedbackNegativo) {
					$(feedbackText.closest('.collapse')).addClass(question.feedbackNegativo)
				}

				$(questionContainer.querySelector('.btn.try-again')).show(0)
			}

			this.removeAttribute('data-toggle')
			$(questionContainer.querySelector(`${this.dataset.target}`)).collapse('show')
		})

		tryAgainBtn = $('<button>')
		tryAgainBtn.addClass('btn text-dark bg_yellow try-again')
		tryAgainBtn.css({ 'border-radius': '7px', 'margin-left': '10px' })
		tryAgainBtn.attr('type', 'button')
		tryAgainBtn.attr('data-target', `#feedback-question-${i}`)
		tryAgainBtn.hide()
		tryAgainBtn.click(function (evt) {
			let questionContainer = this.closest('.question-main-container')

			questionContainer.querySelectorAll('input').forEach(el => {
				el.checked = false
				el.disabled = false
				el.classList.remove('correct', 'incorrect')
			})

			$(questionContainer.querySelector(`${this.dataset.target}`)).collapse('hide')
			$(this).hide()
		})

		let collapseDiv = $('<div>')
		collapseDiv.addClass('collapse')
		collapseDiv.attr('id', `feedback-question-${i}`)
		collapseDiv.css('width', '100%')

		let cardDiv = $('<div>')
		cardDiv.addClass('card card-body caixa_feedback text-white ')
		cardDiv.css('border-radius', '10px')

		let tituloactionsP = $('<p>')
		tituloactionsP.addClass('texto-feedback_padrao text-warning  h3')

		let strongFeedback = $('<strong>')

		let separadorHr = $('<hr>')
		separadorHr.addClass('bg-warning')
		separadorHr.css('margin-top', '-0.5rem')

		let textoFeedback = $('<p>')
		textoFeedback.addClass('m-3 feedback-text')

		tituloQuestao.append(question.question)
		h2.append(h2Div)
		h2.append(tituloQuestao)
		form.append(h2)
		form.append(alternatives)
		div4.append(form)
		feedbackBtn.append('Responder')
		tryAgainBtn.append('Tentar novamente')
		actionsP.append(feedbackBtn)
		actionsP.append(tryAgainBtn)
		strongFeedback.append('')
		tituloactionsP.append(strongFeedback)
		textoFeedback.append(question.feedback)
		cardDiv.append(tituloactionsP)
		cardDiv.append(separadorHr)
		cardDiv.append(textoFeedback)
		collapseDiv.append(cardDiv)
		div3.append(div4)
		div3.append(actionsP)
		div3.append(collapseDiv)
		div2.append(div3)
		questionDiv.append(div2)
		container.append(questionDiv)
	}
})

function validarQuestao(evt) {
	const btn = evt.target
	const questao = btn.closest('.questao')
	const textarea = questao.querySelector('textarea')

	if (textarea.value.trim()) {
		textarea.setAttribute('readonly', true)
		btn.removeAttribute('data-toggle')
		$(questao.querySelector(`${btn.dataset.target}`)).collapse('show')
	} else {
		return
	}
}
