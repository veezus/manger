IRB.conf[:SAVE_HISTORY] = 10_000

def colorize(text, color_code) = "\e[#{color_code}m#{text}\e[0m"
def black(text) = colorize text, 30
def red(text) = colorize text, 31
def green(text) = colorize text, 32
def brown(text) = colorize text, 33
def blue(text) = colorize text, 34
def purple(text) = colorize text, 35
def cyan(text) = colorize text, 36
def gray(text) = colorize text, 37

if defined?(Rails) && defined?(Rails.env)
  prompt = case Rails.env
           when 'development'
             green Rails.env
           when 'production'
             red Rails.env
           else
             blue Rails.env
           end

  IRB.conf[:PROMPT][:RAILS] = {
    PROMPT_I: "#{prompt}:%03n:%i> ",
    PROMPT_N: "#{prompt}:%03n:%i> ",
    PROMPT_S: "#{prompt}:%03n:%i* ",
    PROMPT_C: "#{prompt}:%03n:%i? ",
    RETURN: " => %s\n"
  }

  IRB.conf[:PROMPT_MODE] = :RAILS
end
